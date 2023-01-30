const precoEtiqueta = 150;
const formaDePagamento = 1;

if (formaDePagamento === 1) {
    valor = precoEtiqueta - (precoEtiqueta * 0.1);
} else if (formaDePagamento === 2) {
    valor =  precoEtiqueta - (precoEtiqueta * 0.15);
} else if (formaDePagamento === 3) {
    valor = precoEtiqueta;
} else {
    valor = precoEtiqueta + (precoEtiqueta * 0.1);
}

console.log(valor);