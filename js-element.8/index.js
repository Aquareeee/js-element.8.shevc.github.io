function formatMoney(number) {
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
  
  const inputNumber = parseFloat(prompt("Введите число:"));
  
  if (!isNaN(inputNumber)) {

    const formattedNumber = formatMoney(inputNumber);
    console.log(`Отформатированное число: ${formattedNumber}`);
  } else {
    console.log("Вы ввели некорректное число.");
  }