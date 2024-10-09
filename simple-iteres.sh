#!/bin/bash

# Script para calcular el interés simple

# Solicitar el principal (capital inicial)
echo "Introduce el principal (capital inicial):"
read principal

# Solicitar la tasa de interés anual (en porcentaje)
echo "Introduce la tasa de interés anual (en porcentaje):"
read tasa_interes

# Solicitar el tiempo (en años)
echo "Introduce el tiempo (en años):"
read tiempo

# Calcular el interés simple
interes_simple=$(echo "scale=2; $principal * $tasa_interes * $tiempo / 100" | bc)

# Mostrar el resultado
echo "El interés simple es: $interes_simple"
