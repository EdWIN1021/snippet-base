package main

import "fmt"

func main() {

	// This creates an `int` slice with a length of 5 and a capacity of 5
	x := make([]int, 5)

	// This creates an `int` slice with a length of 5 and a capacity of 10
	y := make([]int, 5, 10)

	// The length of 6 and a capacity of 10 (the capacity was doubled as soon as the sixth element was appended)
	x = append(x, 10)


	fmt.Println(x)
	fmt.Println(y)

}