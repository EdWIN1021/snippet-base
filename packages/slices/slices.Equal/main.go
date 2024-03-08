package main

import (
	"fmt"
	"slices"
)


func main() {
	x := []int{1, 2, 3, 4, 5}
	y := []int{1, 2, 3, 4, 5}
	fmt.Println(slices.Equal(x, y))
}