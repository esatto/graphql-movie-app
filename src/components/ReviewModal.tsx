import React from 'react';
import {
  AddReviewMutation,
  ADD_REVIEW_MUTATION
} from '../queries/AddReviewMutation';
import { Button } from './common/Button';
import { Modal } from './common/Modal';
import { ReviewForm } from './ReviewForm';

interface Props {
  movieId: string;
}

interface State {
  open: boolean;
}

export class ReviewModal extends React.Component<Props, State> {
  state = {
    open: false
  };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    return (
      <>
        <Modal active={this.state.open} close={this.close}>
          <AddReviewMutation mutation={ADD_REVIEW_MUTATION}>
            {addReview => (
              <ReviewForm
                movieId={this.props.movieId}
                onSubmit={async data => {
                  await addReview({
                    variables: {
                      review: data
                    }
                  });
                  console.log(data);
                  this.close();
                }}
              />
            )}
          </AddReviewMutation>
        </Modal>

        <Button onClick={this.open}>Write review</Button>
      </>
    );
  }
}
