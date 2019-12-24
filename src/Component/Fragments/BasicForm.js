import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Divider,
  Checkbox,
  Container
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
                    Login
                </Header>
                <Segment>
                    <Form size="large">
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="Email address"
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                        />
                        <Button color="blue" fluid size="large">
                            Login
                        </Button>
                        <br />
                        <Grid.Row>
                            <Checkbox label={{ children: 'Remember Me' }} style={{float:'right'}}/>
                        </Grid.Row>
                        <br />
                    </Form>
                </Segment>
                <Message>
                    Not registered yet? <a href="/signup">Sign Up</a>
                </Message>
                </Grid.Column>
            </Grid>
        </Grid.Row>
    </Container>
);