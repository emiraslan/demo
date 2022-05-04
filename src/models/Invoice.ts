
class Invoice {
  public productName: string
  public price: number
  public qty: number

  constructor(productName = '', price = 0, qty = 0) {
    this.productName = productName
    this.price = price
    this.qty = qty
  }
  
  public get sum() : number {
    return this.price * this.qty
  }
}

export default Invoice