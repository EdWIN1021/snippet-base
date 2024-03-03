package classes.polymorphism;

public class ScienceFiction extends Movie{

    public ScienceFiction(String title) {
        super(title);
    }

    public void watchScienceFiction(){
        System.out.println("Watching a ScienceFiction!");
    }



    @Override
    public void watchMovie() {
        super.watchMovie();
        System.out.printf(".. %s%n".repeat(3), "Bad Aliens do Bad Stuff", "Space Guys Chase Aliens", "Planet Blows Up");
    }
}
