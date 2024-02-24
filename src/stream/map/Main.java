package stream.map;

import java.util.stream.IntStream;

public class Main {
    public static void main(String[] args) {
        IntStream.iterate(1, c -> c <= 10, c -> c + 1)
                .map(num -> num + 2)
                .forEach(num -> System.out.printf("%d ", num));
    }
}
