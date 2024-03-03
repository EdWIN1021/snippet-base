package main

import "fmt"

type myNumbers interface {
	~int | ~float64
}

type myAlias int

// type constraint
func addT[T myNumbers](a, b T) T {
	return a + b
}

func main() {
	var n myAlias = 42

	fmt.Println(addT(n, 100))
}
