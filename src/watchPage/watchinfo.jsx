import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Star, Minus, Plus } from "lucide-react";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import images from "./watchesData/watchdata";
import { WatchContext } from "./watchcontext";
import "./watchinfo.css";

const colors = [
  { name: "Black", code: "#111111" },
  { name: "Brown", code: "#8b5a45" },
  { name: "Blue", code: "#1f3a63" },
];

function WatchInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const watchId = Number(id);
  const watch = images[watchId];

  const { index: wishlist, addindex, addCartIndex } = useContext(WatchContext);

  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(colors[0]);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  if (!watch) {
    return (
      <>
        <Nav />
        <div className="Info-main">
          <p>Watch not found</p>
          <button className="Info-wish" onClick={() => navigate("/watchcollection")}>
            Back to collection
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const gallery =
    watch.images && watch.images.length
      ? watch.images
      : [watch.image, watch.image, watch.image];
  const liked = wishlist.includes(watchId);
  const rating = Math.round(parseFloat(watch.star) || 0);

  function handleAddToCart() {
    addCartIndex(watchId, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <>
      <Nav />
      <div className="Info-main">
        <div className="Info-thumbs">
          {gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={i === activeImg ? "Info-thumb active" : "Info-thumb"}
              onClick={() => setActiveImg(i)}
            />
          ))}
        </div>

        <div className="Info-image">
          <img src={gallery[activeImg]} alt={watch.title} />
        </div>

        <div className="Info-details">
          <h1 className="Info-title">{watch.title}</h1>
          <h2 className="Info-price">{watch.price}</h2>

          <div className="Info-rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} size={18} color="#e8b84a" fill={n <= rating ? "#e8b84a" : "none"} />
            ))}
            <span>({watch.reviewRate} reviews)</span>
          </div>

          <p className="Info-desc">
            {watch.description ||
              "A timeless classic designed for everyday style. Simple, elegant and always in trend."}
          </p>

          <p className="Info-label">Color</p>
          <div className="Info-colors">
            {colors.map((c) => (
              <button
                key={c.name}
                className={color.name === c.name ? "Info-color selected" : "Info-color"}
                style={{ background: c.code }}
                onClick={() => setColor(c)}
                title={c.name}
              />
            ))}
          </div>

          <p className="Info-label">Quantity</p>
          <div className="Info-qty">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
              <Minus size={16} />
            </button>
            <span>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)}>
              <Plus size={16} />
            </button>
          </div>

          <button className="Info-cart" onClick={handleAddToCart}>
            <ShoppingCart size={18} /> {added ? "Added to Cart ✓" : "Add to Cart"}
          </button>

          <button className="Info-wish" onClick={() => addindex(watchId)}>
            <Heart size={18} color={liked ? "#e8b84a" : "white"} fill={liked ? "#e8b84a" : "none"} />
            {liked ? "Added to Wishlist" : "Add to Wishlist"}
          </button>

          <hr className="Info-line" />

          <h3 className="Info-sub">Product Details</h3>
          <div className="Info-table">
            <p><span>Brand</span>Timora</p>
            <p><span>Category</span>{watch.cat}</p>
            <p><span>Strap</span>{watch.cat2}</p>
            <p><span>Color</span>{color.name}</p>
            <p><span>Warranty</span>1 Year</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WatchInfo;