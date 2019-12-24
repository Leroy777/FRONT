import React, {Fragment} from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Divider,
  Container,
  Popup,
} from 'semantic-ui-react';

export default () => (
    <Container>
        <Grid.Row>
            <Grid.Row>
                <Divider horizontal>
                    Warm-World Internet Trading Ltd.
                </Divider>
            </Grid.Row>
            <Grid.Row style={{height:'100px'}}><br /></Grid.Row>
            <Grid centered columns={2}>
                <Grid.Column>
                <Header as="h2" textAlign="center">
                    Sign Up Today
                </Header>
                <Segment>
                    <Form size="large">
                        <Form.Input 
                            fluid
                            icon="address book"
                            iconPosition="left"
                            placeholder="Full name"
                            required
                        />
                        <Form.Input
                            fluid
                            icon="envelope"
                            iconPosition="left"
                            placeholder="Email address - (this is your username)"
                            required
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                            required
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="please confirm your password"
                            type="password"
                            required
                        />
                        <Popup
                            trigger={
                                <Form.Input
                                    fluid
                                    icon="birthday cake"
                                    iconPosition="left"
                                    placeholder="birthdate"
                                    type="date"
                                    required
                                />
                            }
                            content="please tell us your real birthdate, so we can suggest the right product to you"
                        />
                        <Button color="blue" fluid size="large">
                            Sign Up
                        </Button>
                        <br />
                    </Form>
                </Segment>
                <Message>
                    Already a Member? <a href="/signin">Sign In</a>
                </Message>
                </Grid.Column>
            </Grid>
        </Grid.Row>
    </Container>
);