package main

import (
	"fmt"

	"golang.org/x/exp/constraints"
)

type myNumbers interface {
	constraints.Integer | constraints.Float
}

type myAlias int

// type constraint
func addT[ T myNumbers](a, b T) T {
	return a + b
}

func main() {
	var n myAlias = 452

	fmt.Println(addT(n, 100))
}

