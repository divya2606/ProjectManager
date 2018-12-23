import { FilterPipe } from './filter.pipe';
import { ProjectFilter } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('ProjectFilter', () => {
  it('create an instance', () => {
    const pipe = new ProjectFilter();
    expect(pipe).toBeTruthy();
  });
});
