package main

import "fmt"


func main() {
	x := []int{1, 2, 3, 4, 5}
  y := []int{5,6,7,8,9}

	x = append(x, y...)
	x = append(x, 10)
	
	fmt.Println(x)

}