import React, { memo } from "react";
import PropTypes from "prop-types";  // Importando PropTypes
//import RefreshIcon from 'assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from "../../../components";
import COUNTRIES from "../../../commons/constants/countries";
import { CardPanelContentStyled, ItemStyled } from "./style";

const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country }) {
    const { recovered } = data;


    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`Pais-${country.label}`} />
            </ItemStyled>      
        </MenuItem>
    );

    const textCovid19 = `Pais: ${country} - recuperados: ${recovered}`;

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19);
    };

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: "https://covid19dio.netlify.app/"
        });
    };

    const renderShareButton = (
        <div>
            <Button variant="container" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    );

    const renderCopyButton = (
        <div>
            <Button variant="container" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    );

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">
                        COVID19 
                    </Typography>
                    <Typography variant="h6" component="span" color="primary">
                        painel Coronavirus 
                    </Typography>
                    <Typography variant="body2" component="span" color="primary">
                        Atualizado em: {updateAt}
                    </Typography>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                {navigatorHasShare ? renderShareButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    );
}

// ✅ Definindo PropTypes
Panel.propTypes = {
    updateAt: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    data: PropTypes.shape({
        cases: PropTypes.number.isRequired,
        recovered: PropTypes.number.isRequired,
        deaths: PropTypes.number.isRequired,
        todayCases: PropTypes.number.isRequired,
        todayDeaths: PropTypes.number.isRequired
    }).isRequired,
    country: PropTypes.string.isRequired,
    getCoviddata: PropTypes.func.isRequired
};

export default memo(Panel);
