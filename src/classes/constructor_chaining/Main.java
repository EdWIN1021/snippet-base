package classes.constructor_chaining;

public class Main {
    public static void main(String[] args) {
        Person p1 = new Person();
        System.out.println(p1);

        Person p2 = new Person("Edwin");
        System.out.println(p2);

        Person p3 = new Person("Yang", "Shi");
        System.out.println(p3);
    }
}
