package Collections.nCopies;

import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> list = Collections.nCopies(10, "Hello");

        System.out.println(list);
    }
}
