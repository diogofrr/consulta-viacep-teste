export const cepMask = (value: string) => {
  if (value.length < 9) {
    const updatedValue = value.replace(/(\D)/, "")
    
    if (updatedValue.length === 8) {
      const maskValue = updatedValue.replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
      return maskValue
    } else {
      return updatedValue
    }
  } else {
    return value.slice(0, 9)
  }
}