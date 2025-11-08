import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import UMKMGrid from "./UMKMGrid";

function UMKMDiscovery() {
    return (
        <section className="mt-32 flex flex-col justify-center items-center">
            <h3 className="font-bold text-6xl gradient-text text-center">Temukan UMKM</h3>
            <SearchBar />
            <CategoryFilter />
            <UMKMGrid />
        </section>
    )
}

export default UMKMDiscovery;