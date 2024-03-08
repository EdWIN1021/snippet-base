package generics;

public class Main {

    public static void main(String[] args) {

        var philly = new Affiliation("city", "Philadelphia, PA", "US");

        Team<BaseballPlayer, Affiliation> phillies = new Team<>("Philadelphia Phillies", philly);
        Team<BaseballPlayer, Affiliation> astros = new Team<>("Houston Astros");

        phillies.addTeamMember(new BaseballPlayer("B Harper", "Right Fielder"));
        phillies.addTeamMember(new BaseballPlayer("B Marsh", "Right Fielder"));
        phillies.addTeamMember(new BaseballPlayer("D Guthrie","Center Fielder"));

        phillies.listTeamMembers();
        scoreResult(phillies, 3, astros, 5);

        System.out.println();

        Team<FootballPlayer, Affiliation> afc = new Team<>("Adelaide Crows");
        afc.addTeamMember(new FootballPlayer("Tex Walker", "Centre half forward"));
        afc.addTeamMember(new FootballPlayer("Rory Laird", "Midfield"));
        afc.listTeamMembers();

        System.out.println();


        Team<VolleyballPlayer, Affiliation> adelaide = new Team<>("Adelaide Storm");
        adelaide.addTeamMember(new VolleyballPlayer("N Roberts", "Setter"));
        adelaide.listTeamMembers();

        Team<VolleyballPlayer, Affiliation> canberra = new Team<>("Canberra Heat");
        canberra.addTeamMember(new VolleyballPlayer("B Block", "Opposite"));
        canberra.listTeamMembers();

        scoreResult(canberra, 0, adelaide, 1);
    }

    public static void scoreResult(BaseballTeam team1, int t1_score, BaseballTeam team2, int t2_score){
        String message = team1.setScore(t1_score, t2_score);
        team2.setScore(t2_score, t1_score);
        System.out.printf("%s %s %s %n", team1, message, team2);
    }

    public static void scoreResult(SportsTeam team1, int t1_score, SportsTeam team2, int t2_score){
        String message = team1.setScore(t1_score, t2_score);
        team2.setScore(t2_score, t1_score);
        System.out.printf("%s %s %s %n", team1, message, team2);
    }

    public static void scoreResult(Team team1, int t1_score, Team team2, int t2_score){
        String message = team1.setScore(t1_score, t2_score);
        team2.setScore(t2_score, t1_score);
        System.out.printf("%s %s %s %n", team1, message, team2);
    }
}
