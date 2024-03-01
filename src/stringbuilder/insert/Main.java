package stringbuilder.insert;

public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello World");
        sb.insert(2, "ABC");

        System.out.println(sb);
    }
}
