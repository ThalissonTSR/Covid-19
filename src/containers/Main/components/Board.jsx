import React, { memo} from "react";
import PropTypes from 'prop-types'
import { Grid, Skeleton } from "../../../components";
import Card from "./Card";

function Board({
    data
}) {
 const {  cases, todayDeaths, recovered, deaths, todayCases} = data


 const getvalue = (value) =>  value ? value : <Skeleton variant= "text" width={182} height={60}></Skeleton>

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getvalue(cases)} label = 'Total de casos' color='#5d78ff' />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getvalue(todayDeaths)} label = 'Óbitos hoje' color='#F78829' />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getvalue(todayCases)} label = 'Casos hoje' color='#000' />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getvalue(deaths)} label = 'Total de mortos' color='#E95078' />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getvalue(recovered)} label = 'Total de recuperados' color='#67C887' />
            </Grid>
        </Grid>
    )

}

export default memo(Board)