import React, { PureComponent } from 'react';
// import T from 'prop-types';

import Classes from './styles';


const DESCRIPTION = `The Women in Photography (WIPNYC) Grant & Mentor Program will provide one
female photographer/photo-based artist with a $5000 grant to produce work in addition to being
paired with four mentors over the course of a year.* The selected artist will also receive a solo
show on wipnyc.org.`;

class TableDetailsRow extends PureComponent {
	// static propTypes = {};

	render() {
		return (
			<tr className={ Classes.detailsRow }>
				<td className={ Classes.detailsRowCell } colSpan={ 5 }>
					<hr className={ Classes.detailsLine } />
					<div className={ Classes.detailsInformation }>
						<section className={ Classes.detailsSection }>
							<h3 className={ Classes.title }>Description</h3>
							<p className={ Classes.content }>
								{ DESCRIPTION }
							</p>

							<h3 className={ Classes.title }>Years Active</h3>
							<p className={ Classes.content }>
								2009 - 2012, 2017
							</p>

							<h3 className={ Classes.title }>Awards List</h3>
							<ul className={ Classes.list }>
								<li>1 grant worth $5000 with mentorship and show opportunies</li>
							</ul>
						</section>
						<section className={ Classes.detailsSection }>


							<h3 className={ Classes.title }>Ages</h3>
							<p className={ Classes.content }>
								18 years & older
							</p>

							<h3 className={ Classes.title }>Gender</h3>
							<p className={ Classes.content }>
								Women only
							</p>


						</section>
					</div>

				</td>
			</tr>
		);
	}
}

export default TableDetailsRow;
