function catalog(products) {
    let catalog = {};
  
    for (const product of products) {
      let [name, price] = product.split(' : ');
      price = Number(price);
      let initial = name[0];
  
      if (!catalog[initial]) {
        catalog[initial] = [];
      }
  
      catalog[initial].push({ name, price });
    }
  
    let sortedInitials = Object.keys(catalog).sort();
  
    for (const initial of sortedInitials) {
      console.log(initial);
      catalog[initial]
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach((product) => console.log(`  ${product.name}: ${product.price}`));
    }
  }
  
  // Example usage:
  let products = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
  ];
  
  catalog(products);