const toMoney = (amount, type) => (
  Number(amount).toLocaleString("en-US", { style: "currency", currency: type })
)

export {
  toMoney
}
