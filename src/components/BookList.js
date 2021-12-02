import React, {useState, useEffect} from "react";
import axios from 'axios';
import BookCard from "./BookCard";
import { Grid, Segment, Container } from "semantic-ui-react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
export default function BookList(){
   
    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    
    useEffect(() => {
      axios.get("http://henri-potier.xebia.fr/books").then((res) => {
        const list = res.data;
        setBooks(list);
      });
    }, []);

    const handleSearchInputChanges = (e) => {
      setSearchValue(e.target.value.toLowerCase());
    };


    return (
      <>
        <Container>
          <Search className="search-book">
            <StyledInputBase
              placeholder="Rechercher un livre"
              value={searchValue}
              onChange={handleSearchInputChanges}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {books.length === 0 ? (
            <div> Loading...</div>
          ) : (
            <div>
              <Grid columns={3}>
                {books.filter((b) => {
                    return b.title.toLowerCase().includes(searchValue)
                  }).map((b) => (
                  <Grid.Column key={b.isbn} style={{ width: "25%" }} className="grid-book">
                    <Segment style={{ height: "100%" }}>
                      <BookCard data={b} />
                    </Segment>
                  </Grid.Column>
                ))}
              </Grid>
            </div>
          )}
        </Container>
      </>
    );
}