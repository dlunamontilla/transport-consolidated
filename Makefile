TRANSPILADOR = scss
PARAMETROS = -w -t expanded
RUTA = recursos/activos/sass:vista/css

main:
	${TRANSPILADOR} ${PARAMETROS} ${RUTA} & php -S localhost:1100

terminar:
	killall -9 ${TRANSPILADOR} php