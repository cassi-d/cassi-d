from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFY_EMAIL = 'info@dirdia.com'

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    organization: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    service_type: str
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class ContactSubmissionCreate(BaseModel):
    name: str
    organization: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    service_type: str
    message: str

class BlogPost(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    slug: str
    excerpt: str
    content: str
    image_url: Optional[str] = None
    author: str = "CleanStreets NJ Team"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    category: str = "Industry News"

class Testimonial(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    company: Optional[str] = None
    content: str
    rating: int = 5
    image_url: Optional[str] = None

class GalleryItem(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    before_image: str
    after_image: str
    category: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "Dirdia API"}

# Contact endpoints
@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact(input: ContactSubmissionCreate):
    contact_obj = ContactSubmission(**input.model_dump())
    doc = contact_obj.model_dump()
    await db.contacts.insert_one(doc)
    return contact_obj

@api_router.get("/contacts", response_model=List[ContactSubmission])
async def get_contacts():
    contacts = await db.contacts.find({}, {"_id": 0}).to_list(1000)
    return contacts

# Blog endpoints
@api_router.get("/blog", response_model=List[BlogPost])
async def get_blog_posts():
    posts = await db.blog_posts.find({}, {"_id": 0}).to_list(100)
    if not posts:
        # Return seed data if no posts exist
        return get_seed_blog_posts()
    return posts

@api_router.get("/blog/{slug}", response_model=BlogPost)
async def get_blog_post(slug: str):
    post = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
    if not post:
        seed_posts = get_seed_blog_posts()
        for p in seed_posts:
            if p.slug == slug:
                return p
        raise HTTPException(status_code=404, detail="Post not found")
    return BlogPost(**post)

# Testimonials endpoints
@api_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    testimonials = await db.testimonials.find({}, {"_id": 0}).to_list(100)
    if not testimonials:
        return get_seed_testimonials()
    return testimonials

# Gallery endpoints
@api_router.get("/gallery", response_model=List[GalleryItem])
async def get_gallery():
    items = await db.gallery.find({}, {"_id": 0}).to_list(100)
    if not items:
        return get_seed_gallery()
    return items

# Seed data functions
def get_seed_blog_posts() -> List[BlogPost]:
    return [
        BlogPost(
            id="1",
            title="How to Win NJ Street Cleaning Contracts",
            slug="how-to-win-nj-street-cleaning-contracts",
            excerpt="Learn the key strategies for securing municipal street cleaning contracts in New Jersey.",
            content="Winning government contracts requires proper documentation, competitive pricing, and a proven track record...",
            category="Government Contracts",
            image_url="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
        ),
        BlogPost(
            id="2",
            title="What Municipal Buyers Look for in Cleaning Vendors",
            slug="what-municipal-buyers-look-for",
            excerpt="Understand the key factors that influence municipal purchasing decisions.",
            content="Municipal buyers prioritize reliability, insurance coverage, and compliance with safety standards...",
            category="Industry Insights",
            image_url="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
        ),
        BlogPost(
            id="3",
            title="Commercial Cleaning Compliance Checklist",
            slug="commercial-cleaning-compliance-checklist",
            excerpt="A comprehensive guide to maintaining compliance in commercial cleaning operations.",
            content="Compliance is critical for commercial cleaning companies. This checklist covers OSHA requirements...",
            category="Compliance",
            image_url="https://images.unsplash.com/photo-1586281010691-f5c20e93f5ea?w=800"
        ),
        BlogPost(
            id="4",
            title="Benefits of Professional Street Sweeping",
            slug="benefits-of-professional-street-sweeping",
            excerpt="Discover how professional street sweeping improves safety and property values.",
            content="Regular street sweeping removes debris, reduces pollutants, and enhances community aesthetics...",
            category="Services",
            image_url="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
        )
    ]

def get_seed_testimonials() -> List[Testimonial]:
    return [
        Testimonial(
            id="1",
            client_name="Michael Rodriguez",
            company="Bergen County Property Management",
            content="Reliable, professional, and always on time. Our facility has never looked better. Dirdia has been our go-to cleaning partner for over three years.",
            rating=5
        ),
        Testimonial(
            id="2",
            client_name="Sarah Thompson",
            company="Newark School District",
            content="They understand compliance and documentation, which makes working with them easy. Their attention to detail in our school facilities is exceptional.",
            rating=5
        ),
        Testimonial(
            id="3",
            client_name="James Chen",
            company="Jersey City Municipal Works",
            content="Outstanding street sweeping services. They've helped us maintain clean public spaces while staying within budget. Highly recommended for municipal contracts.",
            rating=5
        )
    ]

def get_seed_gallery() -> List[GalleryItem]:
    return [
        GalleryItem(
            id="1",
            title="Office Floor Restoration",
            before_image="https://images.unsplash.com/photo-1769340051107-65494cda0a50?w=600",
            after_image="https://images.unsplash.com/photo-1646215993316-c98f642303ce?w=600",
            category="Commercial"
        ),
        GalleryItem(
            id="2",
            title="Street Litter Removal",
            before_image="https://images.unsplash.com/photo-1558618047-3c8c76b25d3c?w=600",
            after_image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600",
            category="Street Cleaning"
        ),
        GalleryItem(
            id="3",
            title="Sidewalk Power Washing",
            before_image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600",
            after_image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
            category="Pressure Washing"
        )
    ]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
