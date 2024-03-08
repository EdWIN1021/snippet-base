package main

import "fmt"



func main() { 
	x := []string{"a", "b", "c", "d"}

	// changes to an element in a slice affect all slices that share that element.
	y := x[:2]
	z := x[1:]
	d := x[1:3]
	e := x[:]

	fmt.Println(y)
	fmt.Println(z)
	fmt.Println(d)
	fmt.Println(e)
	
}