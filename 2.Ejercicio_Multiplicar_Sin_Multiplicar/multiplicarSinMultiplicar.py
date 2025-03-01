"""
    @description Se proporcionaran dos numeros. 
    El objetivo es multiplicarlos sin utilizar el operador de multiplicación.
"""

def multiplyWithoutOperator(multipying: float, multiplier: float) -> float: 
    result = 0

    for i in range(int(multiplier)):
        result += multipying

    return result


# Solicitar datos con validación
try:
    multipying = float(input("Ingrese el multiplicando: "))
    multiplier = float(input("Ingrese el multiplicador: "))

    result = multiplyWithoutOperator(multipying, multiplier)
    print(f'El resultado de su multiplicación es: {result}')
except:
    print("Por favor ingrese números validos para realizar la multiplicación.")