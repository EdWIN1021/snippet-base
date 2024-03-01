package stringbuilder.replace;

public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello World");
        sb.replace(1, 10, "Z");

        System.out.println(sb);
    }
}
