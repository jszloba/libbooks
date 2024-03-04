import './Brands.css'
const partners = [
    { href: "/magnit", id: "magnit" },
    { href: "/ozon", id: "ozon" },
    { href: "/sber-spasibo", id: "sber-spasibo"},
    { href: "/mir", id: "mir" },
    { href: "/perekrestok", id: "perekrestok" },
    { href: "/beeline", id: "beeline" },
    { href: "/rostelecom", id: "rostelecom" },
];
export const Brands = () => {

    return (
        <section className="brands">
            <div className="container brands-container">
                <div className="brands-header"></div>
                <ul className="brands-list">
                    {partners.map((partner, index) => (
                        <li key={index} className="brands-list-item">
                            <a href={partner.href} className={`${partner.id}`} target="_blank"
                               rel="noreferrer">
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}