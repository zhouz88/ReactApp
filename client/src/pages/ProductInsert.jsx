import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ProductInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
            brand: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputPrice = async event => {
        const price = event.target.validity.valid
            ? event.target.value
            : this.state.price

        this.setState({ price })
    }

    handleChangeInputBrand = async event => {
        const brand = event.target.value
        this.setState({ brand })
    }

    handleIncludeProduct = async () => {
        const { name, price, brand } = this.state
        const payload = { name, price, brand}

        await api.insertProduct(payload).then(res => {
            window.alert(`Product inserted successfully`)
            this.setState({
                name: '',
                price: '',
                brand: '',
            })
        })
    }

    render() {
        const { name, price, brand } = this.state
        return (
            <Wrapper>
                <Title>Create Product</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Price: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={price}
                    onChange={this.handleChangeInputPrice}
                />

                <Label>Brand: </Label>
                <InputText
                    type="text"
                    value={brand}
                    onChange={this.handleChangeInputBrand}
                />

                <Button onClick={this.handleIncludeProduct}>Add Product</Button>
                <CancelButton href={'/products/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ProductInsert