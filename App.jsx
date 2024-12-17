import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { Items } from "./Items";
import Categories from "./Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Blue sofa",
          img: "bluesofa.jpg",
          desc: "Besplatnaya dostavka ot company",
          category: "blue",
          price: "50T",
        },
        {
          id: 2,
          title: "Red sofa",
          img: "redsofa.jpg",
          desc: "Besplatnaya dostavka ot company",
          category: "red",
          price: "50T",
        },
        {
          id: 3,
          title: "Green sofa",
          img: "bluesofa.jpg",
          desc: "Besplatnaya dostavka ot company",
          category: "green",
          price: "50T",
        },
        {
          id: 4,
          title: "Pic sofa",
          img: "pic.jpg",
          desc: "Besplatnaya dostavka ot company",
          category: "green",
          price: "50T",
        },
      ],
      fullItem: {},
      showFullItem: false,
    };
    this.state.currentItems = this.state.items;

    this.addToOrder = this.addToOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState((prevState) => ({
      fullItem: item,
      showFullItem: !prevState.showFullItem,
    }));
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
    } else {
      this.setState({
        currentItems: this.state.items.filter((el) => el.category === category),
      });
    }
  }

  addToOrder(item) {
    if (!this.state.orders.some((order) => order.id === item.id)) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
