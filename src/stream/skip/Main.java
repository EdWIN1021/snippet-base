package stream.skip;

import java.util.stream.IntStream;

public class Main {
    public static void main(String[] args) {
        IntStream.iterate('A', c -> c <= 'z', c -> c +1)
                .filter(Character::isAlphabetic)
                .skip(5)
                .forEach(c -> System.out.printf("%c ", c));
    }
}
