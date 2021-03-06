// Import de módulos de terceiros
import React, { Component } from 'react';
import {} from 'semantic-ui-react';
import { connect } from "react-redux";

// Import de módulos locais
import messages from '../resources/messages';
import BaseLayout from './base_layout';

// Estados iniciais

// Import das ações

// Ações específicas desse componente

// Reducers que impactam esse componente

// Componente
class NotFoundLayout extends Component {
    render() {
        return (
            <BaseLayout location={this.props.location}>
                <p>404 - Página não encontrada</p>
            </BaseLayout>
        );
    }
}

export default NotFoundLayout;
