var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  minBoughtPerHour: 23,
  maxBoughtPerHour: 65,
  avgSale: 6.3,
  saleHour: [],
  amountCookies: 0,
  cookieCustomer: function () {
    return Math.floor(Math.random() * (this.maxBoughtPerHour - this.minBoughtPerHour + 1) + this.minBoughtPerHour);
  },
  calcSaleHour: function () {
    var saleHour = Math.ceil(this.cookieCustomer() * this.avgSale);
    return saleHour;
  },
  populateSales: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var cookiesSold = this.calcSaleHour();
      this.saleHour.push(cookiesSold);
      this.amountCookies += cookiesSold;
    }
  },

  render: function () {
    var parentElement = document.getElementById('seattle');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      //create an element
      var li = document.createElement('li');
      //give it content
      var currentHour = hoursOfOperation[i];
      var outPut = currentHour + ' Sales: ' + this.saleHour[i] + ' cookies.';
      li.textContent = outPut;
      //append to the DOM
      parentElement.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `Total: ${this.amountCookies} cookies`;
    parentElement.appendChild(li);
  }
};

var tokyo = {
  minBoughtPerHour: 3,
  maxBoughtPerHour: 24,
  avgSale: 1.2,
  saleHour: [],
  amountCookies: 0,
  cookieCustomer: function () {
    return Math.floor(Math.random() * (this.maxBoughtPerHour - this.minBoughtPerHour + 1) + this.minBoughtPerHour);
  },
  calcSaleHour: function () {
    var saleHour = Math.ceil(this.cookieCustomer() * this.avgSale);
    return saleHour;
  },
  populateSales: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var cookiesSold = this.calcSaleHour();
      this.saleHour.push(cookiesSold);
      this.amountCookies += cookiesSold;
    }
  },

  render: function () {
    //<li>6am Sales: 16 cookies</li>
    var parentElement = document.getElementById('tokyo');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      //create an element
      var li = document.createElement('li');
      //give it content
      var currentHour = hoursOfOperation[i];
      var outPut = currentHour + ' Sales: ' + this.saleHour[i] + ' cookies.';
      li.textContent = outPut;
      //append to the DOM
      parentElement.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `Total: ${this.amountCookies} cookies`;
    parentElement.appendChild(li);
  }
};


var dubai = {
  minBoughtPerHour: 11,
  maxBoughtPerHour: 38,
  avgSale: 3.7,
  saleHour: [],
  amountCookies: 0,
  cookieCustomer: function () {
    return Math.floor(Math.random() * (this.maxBoughtPerHour - this.minBoughtPerHour + 1) + this.minBoughtPerHour);
  },
  calcSaleHour: function () {
    var saleHour = Math.ceil(this.cookieCustomer() * this.avgSale);
    return saleHour;
  },
  populateSales: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var cookiesSold = this.calcSaleHour();
      this.saleHour.push(cookiesSold);
      this.amountCookies += cookiesSold;
    }
  },

  render: function () {
    var parentElement = document.getElementById('dubai');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      //create an element
      var li = document.createElement('li');
      //give it content
      var currentHour = hoursOfOperation[i];
      var outPut = currentHour + ' Sales: ' + this.saleHour[i] + ' cookies.';
      li.textContent = outPut;
      //append to the DOM
      parentElement.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `Total: ${this.amountCookies} cookies`;
    parentElement.appendChild(li);
  }
};


var paris = {
  minBoughtPerHour: 20,
  maxBoughtPerHour: 38,
  avgSale: 2.3,
  saleHour: [],
  amountCookies: 0,
  cookieCustomer: function () {
    return Math.floor(Math.random() * (this.maxBoughtPerHour - this.minBoughtPerHour + 1) + this.minBoughtPerHour);
  },
  calcSaleHour: function () {
    var saleHour = Math.ceil(this.cookieCustomer() * this.avgSale);
    return saleHour;
  },
  populateSales: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var cookiesSold = this.calcSaleHour();
      this.saleHour.push(cookiesSold);
      this.amountCookies += cookiesSold;
    }
  },

  render: function () {
    var parentElement = document.getElementById('paris');
    for (var i = 0; i < hoursOfOperation.length; i++) {

      var li = document.createElement('li');
      var currentHour = hoursOfOperation[i];
      var outPut = currentHour + ' Sales: ' + this.saleHour[i] + ' cookies.';
      li.textContent = outPut;
      parentElement.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `Total: ${this.amountCookies} cookies`;
    parentElement.appendChild(li);
  }
};


var lima = {
  minBoughtPerHour: 2,
  maxBoughtPerHour: 16,
  avgSale: 4.6,
  saleHour: [],
  amountCookies: 0,
  cookieCustomer: function () {
    return Math.floor(Math.random() * (this.maxBoughtPerHour - this.minBoughtPerHour + 1) + this.minBoughtPerHour);
  },
  calcSaleHour: function () {
    var saleHour = Math.ceil(this.cookieCustomer() * this.avgSale);
    return saleHour;
  },
  populateSales: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var cookiesSold = this.calcSaleHour();
      this.saleHour.push(cookiesSold);
      this.amountCookies += cookiesSold;
    }
  },

  render: function () {
    var parentElement = document.getElementById('lima');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var li = document.createElement('li');
      var currentHour = hoursOfOperation[i];
      var outPut = currentHour + ' Sales: ' + this.saleHour[i] + ' cookies.';
      li.textContent = outPut;
      parentElement.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `Total: ${this.amountCookies} cookies`;
    parentElement.appendChild(li);
  }
};














seattle.populateSales();
seattle.render();
tokyo.populateSales();
tokyo.render();
dubai.populateSales();
dubai.render();
paris.populateSales();
paris.render();
lima.populateSales();
lima.render();