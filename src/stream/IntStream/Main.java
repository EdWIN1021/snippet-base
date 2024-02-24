package stream.IntStream;

import java.util.stream.IntStream;

public class Main {
    public static void main(String[] args) {
        IntStream.iterate('A', c -> c <= 'z', c -> c +1)
                .forEach(c -> System.out.printf("%c ", c));
    }

}
