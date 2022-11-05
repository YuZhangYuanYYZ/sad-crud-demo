let items = [
  {
    id: 1,
    name: 'SAD-BeiJing',
    description: 'Found in 2001',
  },
  {
    id: 2,
    name: 'SAD-XiAn',
    description: 'Found in 2011',
  },
];

export class Store {
  get() {
    return items;
  }
  set(newItems) {
    items = newItems;
  }
  delete(id) {
    const newItems = items.filter((item) => item.id !== id);
    items = newItems;
  }
  post(item) {
    items = [...items, item];
  }
}
