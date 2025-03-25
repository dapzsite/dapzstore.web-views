function generateProducts() {
    // Kosongkan kategori sebelum menambahkan produk baru
    document.getElementById("product-vps").innerHTML = "";
    document.getElementById("product-cpp").innerHTML = "";
    document.getElementById("product-panel").innerHTML = "";

    products.forEach((product, index) => {
        const productCard = `
            <div class="relative p-4 rounded-xl shadow-lg transition border border-blue-500/30 overflow-hidden hover:shadow-xl duration-300 flex flex-col h-auto">
                <div class="absolute inset-0 bg-blue-900/20 backdrop-blur-xl rounded-xl"></div>
                <div class="relative z-10 flex flex-col h-full">
                    <img src="${product.image}" alt="Product" class="w-full aspect-square object-cover rounded-md">
                    
                    <span class="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-0.5 text-xs font-semibold rounded shadow-sm">
                        <i class="${product.icon}"></i> ${product.title}
                    </span>

                    <h2 class="mt-3 text-lg font-bold text-blue-200">${product.specs} <i class="${product.icon}"></i></h2>
                    
                    <div class="flex items-center text-yellow-400 text-sm mt-1">
                        ${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))}
                        <span class="ml-2 text-orange-300">(${product.rating})</span>
                    </div>
                    
                    <div class="flex justify-between items-center mt-1">
                        <div>
                            <p class="text-blue-400 text-sm line-through">Rp ${product.priceBefore.toLocaleString()}</p>
                            <p class="text-blue-300 font-bold"><i class="fas fa-tags"></i> Rp ${product.priceAfter.toLocaleString()}</p>
                        </div>
                        <span class="bg-green-500/30 text-blue-400 px-2 py-1 text-xs rounded flex items-center gap-1">
                            <i class="fas fa-check-circle"></i> Stok ${product.stock.toLocaleString()}
                        </span>
                    </div>
                    
                    <p class="text-blue-400 text-xs mt-2 flex-grow">${product.description}</p>

                    <div class="mt-auto flex justify-between">
                        <button onclick="openQris()" class="bg-blue-600/70 px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-md">
                            <i class="fas fa-shopping-cart"></i> Beli
                        </button>
                        <button onclick="openModal(${index})" class="bg-blue-700/50 px-4 py-2 rounded-lg hover:bg-blue-800 transition shadow-md">
                            <i class="fas fa-info-circle"></i> Detail
                        </button>
                    </div>

                    <p class="text-xs text-yellow-300 text-center mt-3">
                        <i class="fas fa-user"></i> Di Buat oleh: <span class="font-bold">${product.seller}</span>
                        <i class="fas fa-check-circle text-blue-400"></i>
                    </p>
                </div>
            </div>
        `;

        // Masukkan produk ke dalam kategori yang sesuai
        if (product.category === "Layanan VPS") {
            document.getElementById("product-vps").innerHTML += productCard;
        } else if (product.category === "Layanan GTPS") {
            document.getElementById("product-cpp").innerHTML += productCard;
        } else if (product.category === "Layanan Panel") {
            document.getElementById("product-panel").innerHTML += productCard;
        }
    });
}

// 🔹 Panggil fungsi untuk menampilkan produk saat halaman dimuat
generateProducts();
