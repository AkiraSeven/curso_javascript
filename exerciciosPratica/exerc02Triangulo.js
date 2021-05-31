function comprimentoTriangulo(compri1, compri2, compri3) {
    if (compri1 == compri2 && compri2 == compri3) {
        return 'Equilátero'
    } else if (compri1 == compri2 || compri2 == compri3 || compri1 == compri3 ) {
        return 'Isóceles'
    } else {
        return 'Escaleno'
    }
}

console.log(comprimentoTriangulo(1, 1, 1))
console.log(comprimentoTriangulo(1, 2, 2))
console.log(comprimentoTriangulo(1, 2, 3))