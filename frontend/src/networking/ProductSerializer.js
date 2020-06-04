class ProductSerializer {
  static deSerialize(data) {
    return {
      id: data.id,
      name: data.name || '',
      description: data.description || '',
      stock: data.stock || 0,
      image: data.image || '',
    };
  }
}

export { ProductSerializer };
