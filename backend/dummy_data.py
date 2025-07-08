import json
from sqlalchemy.orm import Session
from models import User, Product, Post, Comment
from datetime import datetime
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

def insert_dummy_data(db: Session):
    # 1. users
    with open(BASE_DIR / "users.json", encoding="utf-8") as f:
        users = json.load(f)
        for u in users:
            user = User(
                name=u["name"],
                nickname=u.get("nickname"),
                age=u.get("age"),
                weight=u.get("weight"),
                height=u.get("height"),
                profile_image=u.get("profile_image"),
                bio=u.get("bio")
            )
            db.add(user)
        db.commit()

    # 2. products
    with open(BASE_DIR / "products.json", encoding="utf-8") as f:
        products = json.load(f)
        for i, p in enumerate(products):
            product = Product(
                id=p["id"],
                name=p["name"],
                price=p["price"],
                shipping=p["shipping_info"],
                volume=p["volume"],
                calories=p["calories"],
                storage=p["storage"],
                shipping_fee=p["shipping_fee"],
                seller=p["seller"]
            )
            db.add(product)

            if (i + 1) % 10 == 0:
                db.commit()
        db.commit()

    # 3. posts
    with open(BASE_DIR / "posts.json", encoding="utf-8") as f:
        posts = json.load(f)
        for p in posts:
            post = Post(
                user_id=p["id"],
                title=p["title"],
                content=p["content"],
                image=p["image"],
                created_at=p.get("created_at", datetime.now().isoformat()),
                likes=p.get("likes", 0)
            )
            db.add(post)
        db.commit()

    # 4. comments
    with open(BASE_DIR / "comments.json", encoding="utf-8") as f:
        comments = json.load(f)
        for c in comments:
            comment = Comment(
                post_id=c["post_id"],
                user_id=c["user_id"],
                content=c["content"],
                created_at=c.get("created_at", datetime.now().isoformat())
            )
            db.add(comment)
        db.commit()
