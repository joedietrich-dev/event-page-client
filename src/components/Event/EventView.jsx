import { Button, ButtonGroup, Typography, Link, Grid, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Paragraph = ({ children, ...params }) => (
  <Typography variant="body1" mt={1} mb={1} {...params}>
    {children}
  </Typography>
);

const SponsorItem = ({ sponsor }) => (
  <Grid container width="100%" mb={2}>
    <Grid item xs={2} sx={{ marginRight: 2 }}>
      <img src={sponsor.logo_src} alt={sponsor.name} width="100%" />
    </Grid>
    <Grid item xs={9}>
      {sponsor.name}
    </Grid>
  </Grid>
);

const SponsorSection = ({ sponsors, sponsorText }) => (
  <>
    <Typography variant="h4" mt={4}>
      {sponsorText}
    </Typography>

    {sortSponsors(sponsors).map((sponsor) => (
      <SponsorItem key={sponsor.link_id} sponsor={sponsor} />
    ))}
  </>
);

const sortSponsors = (s) =>
  s.sort((first, second) => {
    if (first.name > second.name) {
      return 1;
    } else if (first.name < second.name) {
      return -1;
    } else return 0;
  });

function Event() {
  const [event, setEvent] = useState({ hosts: [], honorees: [], event_sponsors: [], panels: [] });
  const { eventId } = useParams();
  const groupedSponsors = event.event_sponsors?.reduce(
    (acc, sponsor) => {
      const newLevel = [...acc[sponsor.event_sponsor_level.name], { ...sponsor.sponsor, link_id: sponsor.id }];
      return { ...acc, [sponsor.event_sponsor_level.name]: newLevel };
    },
    { Partners: [], "Creative Partners": [], "Sponsoring Partners": [], Sponsors: [], "Supporting Sponsors": [] }
  );

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events/${eventId}`)
      .then((res) => res.json())
      .then(setEvent)
      .catch(console.log);
  }, [eventId]);

  return (
    <>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        {event.title}
      </Typography>
      <img src={event.hero_src} alt={event.title} width={"100%"} style={{ padding: "1rem 0" }} />
      <Paragraph>{event.description}</Paragraph>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {event.location}
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center" }} mb={1}>
        {new Date(event.date).toDateString()}
      </Typography>
      <ButtonGroup sx={{ display: "flex", width: "auto", justifyContent: "center" }}>
        <Button variant="contained" component={Link} href={event.register_link}>
          Register
        </Button>
        <Button variant="contained" component={Link} href={event.view_link}>
          View
        </Button>
      </ButtonGroup>

      <Typography variant="h3" mt={6} mb={2}>
        Hosted By
      </Typography>
      {event.hosts.map((host) => (
        <Grid container key={host.id} mb={3}>
          <Grid item xs={2}>
            <img src={host.headshot_src} style={{ width: "100%" }} alt={host.name} />
          </Grid>
          <Grid item xs={10} sx={{ paddingLeft: 2 }}>
            <Typography variant="h4">{host.name}</Typography>
            <Paragraph>{host.bio}</Paragraph>
          </Grid>
        </Grid>
      ))}
      <Typography variant="h3" mt={6} mb={2}>
        Honoring
      </Typography>
      {event.honorees.map((honoree) => (
        <Grid container key={honoree.id} mb={3}>
          <Grid item xs={10} sx={{ paddingRight: 2 }}>
            <Typography variant="h6">{honoree.honor}</Typography>
            <Typography variant="h4">{honoree.name}</Typography>
            <Typography variant="subtitle2">{honoree.descriptor}</Typography>

            <Paragraph>{honoree.bio}</Paragraph>
          </Grid>
          <Grid item xs={2}>
            <img src={honoree.img_src} style={{ width: "100%" }} alt={honoree.name} />
          </Grid>
        </Grid>
      ))}
      <Typography variant="h3" mt={6} mb={2}>
        Panels
      </Typography>
      {event.panels.map((panel) => (
        <Grid container key={panel.id} mb={3}>
          <Grid item xs={10} sx={{ paddingRight: 2, paddingBottom: 2 }}>
            <Typography variant="h6">{new Date(panel.time).toLocaleTimeString()}</Typography>
            <Typography variant="h4">{panel.title.toUpperCase()}</Typography>

            <Paragraph>{panel.description}</Paragraph>
          </Grid>
          <Grid item xs={2}>
            {panel.sponsors.length > 0 &&
              panel.sponsors.map((sponsor) => <img key={sponsor.id} src={sponsor.logo_src} style={{ width: "100%" }} alt={sponsor.name} />)}
          </Grid>
          <Grid item xs={12}>
            <List>
              {panel.panelists.map((panelist) => (
                <ListItem key={panelist.id} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar src={panelist.headshot_src} alt={panelist.name} />
                  </ListItemAvatar>
                  <ListItemText secondary={panelist.bio}>
                    <Typography variant="subtitle1">{panelist.name}</Typography>
                    <Typography variant="subtitle2">
                      {panelist.company} - {panelist.title}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      ))}
      <Typography variant="h3" mt={6} mb={2}>
        Sponsors
      </Typography>
      <Box>
        {groupedSponsors["Partners"].length > 0 && <SponsorSection sponsorText="Partners" sponsors={groupedSponsors["Partners"]} />}
        {groupedSponsors["Creative Partners"].length > 0 && (
          <SponsorSection sponsorText="Creative Partners" sponsors={groupedSponsors["Creative Partners"]} />
        )}
        {/* "Creative Partners": [], "Sponsoring Partners": [], Sponsors: [], "Supporting Sponsors": [] */}
        {groupedSponsors["Sponsoring Partners"].length > 0 && (
          <SponsorSection sponsorText="Sponsoring Partners" sponsors={groupedSponsors["Sponsoring Partners"]} />
        )}
        {groupedSponsors["Sponsors"].length > 0 && <SponsorSection sponsorText="Sponsors" sponsors={groupedSponsors["Sponsors"]} />}
        {groupedSponsors["Supporting Sponsors"].length > 0 && (
          <SponsorSection sponsorText="Supporting Sponsors" sponsors={groupedSponsors["Supporting Sponsors"]} />
        )}
      </Box>
    </>
  );
}

export default Event;
