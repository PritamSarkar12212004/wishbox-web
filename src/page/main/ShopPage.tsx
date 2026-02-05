import ScrollReveal from "../../components/ui/animation/ScrollReveal";

function ShopPage() {
    return (
        <ScrollReveal>
            <div className="p-4">
                <h1 className="text-3xl font-bold text-white mb-6">Shop Our Collection</h1>
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 text-center text-white/50">
                    Browse our premium handcrafted paper decorations and festive boxes.
                </div>
            </div>
        </ScrollReveal>
    )
}

export default ShopPage