package collections.List.LinkedList.remove;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String [] strs = {"a", "b", "c", "e"};
        LinkedList<String> list = new LinkedList<>(List.of(strs));

        list.remove("b");
        list.remove(1);
        list.remove();

        System.out.println(list);
    }
}
