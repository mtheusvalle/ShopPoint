import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import {
  Table,
  Button,
  Row,
  Col,
  Modal,
  Form,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../components/Message/errorMessage";
import SuccessMessage from "../components/Message/successMessage";
import TableLoader from "../components/Loader/TableLoader";
import {
    Button as MaterialButton,
    TextField,
    CircularProgress,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    makeStyles,
} from "@material-ui/core/";
import {
listProductsForAdmin,
deleteProduct,
createProduct,
} from "../actions/productAction";
import * as productConstants from "../constants/productConstants";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 330,
      top: 6,
      left: -4,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    prgressColor: {
      color: "#fff",
    },
  }));

  const CategoryList = () => {
    const dispatch = useDispatch();

    const classes = useStyles();

    return (
    <Container>
        <Row>
            `<h1>Hello World</h1>`
        </Row>
    </Container>
    )
  }

  export default CategoryList;