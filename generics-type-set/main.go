package main

import "fmt"

type myNumbers interface {
	int | float64
}

// type constraint
func addT[T myNumbers](a, b T) T {
	return a + b
}

func main() {
	fmt.Println(addT(1, 3.1))
}
