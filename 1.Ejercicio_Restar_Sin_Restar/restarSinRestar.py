# Solicitar datos y convertir a enteros
numberOne = int(input("Ingrese el primer número: "))
numberTwo = int(input("Ingrese el segundo número: "))

# Determinar el número mayor y menor
largerNumber: int = max(numberOne, numberTwo)
smallerNumber: int = min(numberOne, numberTwo)

# Inicializar variables
result: int = 0

if largerNumber != smallerNumber:
    difference: int = 0

    while result < largerNumber:
        difference += 1
        result = smallerNumber + difference
    
    print(f'El resultado de su resta es: {result - smallerNumber}')
else:
    print(f'El resultado de su resta es: {result}')