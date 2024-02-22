package main

import "fmt"

// type constraint
func addT[ T int | float64](a, b T) T {
	return a + b
}

func main() {
	fmt.Println(addT(1, 2.1))
}