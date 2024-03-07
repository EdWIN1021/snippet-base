package main

import (
	"fmt"
	"math"
)


type errorString struct {
	s string
}

func (e errorString) Error() string {
  return e.s
}

func New(text string) error {
	return &errorString{text}
}

func Sqrt(f float64) (float64, error) {
	if f < 0 {
    return 0, New("sqrt of negative number")
  }
  return math.Sqrt(f), nil
}


func main() {
	result, err := Sqrt(-4)
	fmt.Println(result)
	fmt.Println(err)

}